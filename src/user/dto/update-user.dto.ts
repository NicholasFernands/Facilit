import { PartialType } from "@nestjs/mapped-types";
import { PostUserDto } from "./post-user.dto";

export class UpdateUserDto extends PartialType(PostUserDto) {}
