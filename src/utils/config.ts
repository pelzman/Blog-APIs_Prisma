export default {
  HTTP_CODES: {
    SUCCESS: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
    CONFLICT: 409,
    UNAUTHORIZED: 401,
    ACCEPTED: 202,
    FORBIDDEN: 403,
    GONE: 410,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    SERVICE_UNAVAILABLE: 503,
    BAD_GATEWAY: 502,
    GATEWAY_TIMEOUT: 504,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
    PAYMENT_REQUIRED: 402,
    PRECONDITION_FAILED: 412,
    REQUEST_ENTITY_TOO_LARGE: 413,
    REQUEST_TIMEOUT: 408,
    REQUEST_URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    UPGRADE_REQUIRED: 426,
    VARIANT_ALSO_NEGOTIATES: 506,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    TOKEN_EXPIRED: 419,
  },

  RESPONSE_MESSAGES: {
    CLIENT_TEAM_MEMBER_ADDED: "Client team member successfully added.",
    CLIENT_TEAM_MEMBERS_NOT_FOUND: "Client team members not found",
    CLIENT_FETCHED: "Client successfully fetched",
    REQUEST_CREATED: "Request successfully created.",
    CLIENT_CREATED: "Client successfully created.",
    USER_LOGIN: "User successfully logged in.",
    TRY_AGAIN_LATER: "Some error Occured. Please try again later.",
    SUBSCRIPTION_NOT_FOUND: "Subscription not found",
    CLIENT_NOT_FOUND: "Client not found",
    OPPORTUNITY_APPROVED: "Approved", 
    INVALID_TOKEN: "Invalid token"  , 
    REFRESH_TOKEN: "Token refreshed successfully",
    CHANGED_PASSWORD: "Password changed successfully",
    CLIENT_ALREADY_EXISTS: "Client already exists",
    OPPORTUNITY_NOT_FOUND: "Opportunity not found",
    OTP_EXPIRED: "OTP has expired. Please request for a new OTP.",
    WRONG_OTP: "Wrong OTP. Please use correct OTP.",
    USER_NOT_FOUND: "User not found",
    USER_ALREADY_EXISTS: "User already exists",
    ROLE_ALREADY_ASSIGNED_TO_USER: "Role already assigned to user",
    ROLE_ALREADY_EXISTS: "Role already exists",
    VERIFIED: "Verified.",
    NOT_VERIFIED: "Not verified.",
    ACCESS_DENIED: "Access denied.",
    ACCESS_VERIFIED:
      "Access verified. You are authorized to perform this action",
    ROLE_VERIFIED: "Role verified.",
    ROLE_CREATED: "Role successfully created.",
    ROLE_NOT_ASSIGNED: "Role not assigned to user",
    PERMISSION_NOT_ASSIGNED: "Permission not assigned to user",
    PERMISSION_VERIFIED: "Permission verified.",
    ACCOUNT_CREATED: "account successfully created.",
    ORGANIZATION_CREATED: "Organization successfully created.",
    ORGANIZATION_EXIST: "Organization already exists",
    ORGANIZATION_NOT_FOUND: "Organization not found",
    ORGANIZATION_UPDATED: "Organization successfully updated.",
    // ACCOUNT_CREATED:"account successfully created. Please confirm your email address using the OTP(One Time Password) code we sent to your email",
    UNABLE_TO_LOGOUT: "Unable to logout. Please try again later",
    UNABLE_TO_LOGIN: "Unable to log in. Please try again later",
    WRONG_PASSWORD: "Wrong password. Please login with correct password.",
    WRONG_PIN: "Wrong PIN. Please use correct PIN.",
    WRONG_TRANSACTION_PIN: "Wrong transaction PIN. Please use correct PIN.",
    VALID_TRANSACTION_PIN: "Transaction PIN verified.",
    INVALID_CREDENTIAL:
      "Wrong email or password. Please login with correct credential.",
    WRONG_EMAIL: "Wrong email. Please login with correct email.",
    ACCOUNT_EXIST: "Account already exists",
    USER_NOT_EXIST: "Account  does not exist. Please signup",
    INVALID_REFFRRAL_CODE: "Invalid or expired referral code",
    EMAIL_ALREADY_EXIST:
      "Email has been used. Please log in or change password it was used by you in the past.",
    INVALID_EMAIL:
      "Email does not exist on our solution. Please register to use Sendam",
    PHONE_ALREADY_EXIST: "Phone number has been used by another user",
    NOT_A_USER: "User does not exist",
    USERNAME_ALREADY_EXIST: "email has been used by another user",
    BVN_ALREADY_EXIST: "BVN has been used by another user",
    EMAIL_NOT_VERIFIED: "You are yet to verify your email",
    CONFIRM_EMAIL:
      "Account found. Please confirm your email address using the OTP(One Time Password) code we sent to your email.",
    UNABLE_TO_VERIFY_EMAIL:
      "We are unable to verify your email address at the moment. Please try again later",
    EMAIL_VERIFIED:
      "Bravo! Your email has been verified. Please login to make your first transaction on Sendam",
    PHONE_NOT_VERIFIED: "You are yet to verify your phone number",
    BVN_NOT_VERIFIED: "You are yet to verify your bank verification code(BVN)",
    KYC_NOT_VERIFIED: "You are yet to verify your KYC identity",
    TRANSACTION_PIN_NOT_SET: "You are yet to set your transaction pin",
    PIN_SET: "PIN successully set",
    LOGIN_PIN_NOT_SET: "You are yet to set your login pin",
    INVALID_OTP: "Invalid OTP/Does not exist",
    USED_OTP: "OTP already used",
    EXPIRED_OTP: "OTP has expired",
    OTP_VERIFIED: "OTP verified",
    TOKEN_EXPIRED: "Token has expired",
    TOKEN_NOT_FOUND: "Token not found",
    UNABLE_TO_SEND_OTP_TO_EMAIL:
      "Unable to send OTP to email. Pleasetry again later",
    WEB_HOOK_RECEIVED: "Webhook successully received",
    SUCCESS: "Success",
    TRANSACTION_CONFIRMED:
      "Transaction confirmed. Fund received. Commision and other charges applied.",
    TRANSACTION_APPROVED: "Transaction Approved",
    TRANSACTION_CANCELLED: "Transaction Cancelled",
    TRANSACTION_COMPLETED: "Transaction Completed. Settlement made",
    UNABLE_TO_INVOICE: "Unable to send invoice email. Please try again later.",
    INVOICE_SENT: "Invoice successfully sent",
  },
};
