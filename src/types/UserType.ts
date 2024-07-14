import { Prisma} from "@prisma/client"
const userSelect = Prisma.validator<Prisma.UserSelect> ()({
   id:true,
   firstname: true,
   lastname:true,
   email:true,
   password:true,
   posts :true,
   comments:true,
   likes:true 
})

export  type  IUserAttribute =Prisma.UserGetPayload< {
select : typeof userSelect
}>

