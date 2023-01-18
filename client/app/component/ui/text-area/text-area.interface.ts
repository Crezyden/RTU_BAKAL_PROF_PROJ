import { InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import { FieldError } from "react-hook-form"
import { IFielProps } from './../field/Field.interface';


type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement>&
IFielProps

export interface ITextArea extends TypeInputPropsField{}
 