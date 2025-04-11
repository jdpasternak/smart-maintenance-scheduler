import { format } from "date-fns";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { HTMLInputTypeAttribute } from "react";

type FormFieldProps = {
    control: any;
    name: string;
    label: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
}

export function DateFormField(props: FormFieldProps) {
    const { control, name, label } = props;
    return (<FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input
                        type="date"
                        value={field.value ? format(field.value, 'yyyy-MM-dd') : ''}
                        onChange={e => field.onChange(new Date(e.target.value + "T00:00:00"))}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />)
}

export function InputFormField(props: FormFieldProps) {
    const { control, name, label, placeholder, type } = props;
    return (<FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input type={type || "text"} placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />)
}
