import { InputHTMLAttributes } from "react"
import { FieldError } from "react-hook-form"

export interface IFielProps{
	error?: FieldError
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement>& IFielProps

export interface IField extends TypeInputPropsField{}
