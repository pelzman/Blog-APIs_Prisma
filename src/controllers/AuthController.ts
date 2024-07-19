import { Request, Response, NextFunction } from "express";
import AuthService from "../services/AuthService";
import Validate from "../utils/validation";
import config from "../utils/config";
import AuditTrailService from "../services/AuditTrailService";

class AuthController {
  protected authService: AuthService;
  protected validate: Validate;
  private auditTrailService: AuditTrailService;
  constructor() {
    this.authService = new AuthService();
    this.validate = new Validate();
    this.auditTrailService = new AuditTrailService();
  }
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      //validate the body
      const { error } = await this.validate.validateUser(req.body);
      if (error)
        res.status(config.HTTP_CODES.BAD_REQUEST).json({
          status: config.HTTP_CODES.BAD_REQUEST,
          message: error.details[0].message,
        });
      const user = await this.authService.HandleregisterUser(req.body);

      await this.auditTrailService.HandleCreateAuditTrail({
        action: "CREATE",
        entity: "signup",
        entityId: user.id,
        userId: user.id,
        details: {
          userName: user.firstname,
          userEmail: user.email,
          description: `${user.firstname}, signup an account at ${new Date()}`,
        },
      });
      return res.status(config.HTTP_CODES.SUCCESS).json({
        status: config.HTTP_CODES.SUCCESS,
        message: config.RESPONSE_MESSAGES.CLIENT_CREATED,
        data: user,
      });
    } catch (error: any) {
      next(error);
      return res
        .status(config.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json(error.message);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.authService.HandleLogin(req.body);
      if (!user)
        res
          .status(config.HTTP_CODES.BAD_REQUEST)
          .json(config.RESPONSE_MESSAGES.INVALID_CREDENTIAL);

      await this.auditTrailService.HandleCreateAuditTrail({
        action: "CREATE",
        entity: "login",
        entityId: user.user.id,
        userId: user.user.id,
        details: {
          userName: user.user.firstname,
          userEmail: user.user.email,
          description: `${user.user.email}, login  at ${new Date()}`,
        },
      });
      return res.status(config.HTTP_CODES.SUCCESS).json({
        status: config.HTTP_CODES.SUCCESS,
        message: config.RESPONSE_MESSAGES.USER_LOGIN,
        data: user,
      });
    } catch (error: any) {
      next(error);
      return res
        .status(config.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json(error.message);
    }
  }
  async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, oldPassword, newPassword } = req.body;

      const changePassword = await this.authService.HandleChangePassword(
        email,
        oldPassword,
        newPassword
      );
      if (!changePassword)
        res
          .status(config.HTTP_CODES.BAD_REQUEST)
          .json(config.RESPONSE_MESSAGES.INVALID_CREDENTIAL);
      return res.status(config.HTTP_CODES.SUCCESS).json({
        status: config.HTTP_CODES.SUCCESS,
        message: config.RESPONSE_MESSAGES.CHANGED_PASSWORD,
      });
    } catch (error: any) {
      next(error);

      return res
        .status(config.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json(error.message);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const refresh = await this.authService.HandleRefreshToken(refreshToken);
      if (!refresh)
        res
          .status(config.HTTP_CODES.BAD_REQUEST)
          .json(config.RESPONSE_MESSAGES.INVALID_TOKEN);
      return res.status(config.HTTP_CODES.SUCCESS).json({
        status: config.HTTP_CODES.SUCCESS,
        message: config.RESPONSE_MESSAGES.REFRESH_TOKEN,
        data: refresh,
      });
    } catch (error: any) {
      next(error);
      return res
        .status(config.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json(error.message);
    }
  }
}

export default AuthController;
