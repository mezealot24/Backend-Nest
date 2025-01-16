import { IsString, IsEmail, IsEnum, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export enum Title {
  MR = 'MR',
  MRS = 'MRS',
  MISS = 'MISS'
}

export enum Department {
  ACCOUNTING = 'ACCOUNTING',
  FINANCE = 'FINANCE',
  HR = 'HR',
  IT = 'IT',
  SALES = 'SALES',
  MARKETING = 'MARKETING'
}

export class CreateUserDto {
  @IsEnum(Title)
  title: Title;

  @IsString()
  firstNameTh: string;

  @IsString()
  lastNameTh: string;

  @IsString()
  firstNameEn: string;

  @IsString()
  lastNameEn: string;

  @IsString()
  employeeId: string;

  @IsEnum(Department)
  department: Department;

  @IsEmail()
  email: string;

  @IsBoolean()
  useNas: boolean;

  @IsBoolean()
  useInternet: boolean;

  @IsBoolean()
  useEcons: boolean;

  @IsBoolean()
  useNyc: boolean;

  @IsString()
  @IsOptional()
  printerCode?: string;

  @IsString()
  @IsOptional()
  printerBrand?: string;

  @IsString()
  @IsOptional()
  printerModel?: string;

  @IsString()
  @IsOptional()
  printerLocation?: string;

  @IsString()
  @IsOptional()
  phoneExt?: string;

  @IsString()
  @IsOptional()
  phoneDirect?: string;

  @IsNumber()
  roleId: number;

  

}

export class UpdateUserDto extends CreateUserDto {
  @IsOptional()
  title: Title;

  @IsOptional()
  firstNameTh: string;

  @IsOptional()
  lastNameTh: string;

  @IsOptional()
  firstNameEn: string;

  @IsOptional()
  lastNameEn: string;

  @IsOptional()
  employeeId: string;

  @IsOptional()
  department: Department;

  @IsOptional()
  email: string;

  @IsOptional()
  roleId: number;
}

export class UserResponseDto extends CreateUserDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}