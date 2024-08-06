import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CheckboxDemo, InputDemo } from "@/components";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Please include an '@' in the email address"
    }).email({ message: "Invalid email address" }),
    password: z.string({
        required_error: "Password is required",
    }).min(5, {
        message: "Must be at least 5 characters long"
    }),
});

export default function LoginForm() {
    const [isLoading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        await new Promise((resolve) => {
            setTimeout(() => {
                toast(JSON.stringify(values))
                resolve(null);
            }, 3000);
        });
        setLoading(false);
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <InputDemo
                label="Email"
                type="email"
                placeholder="Digite seu e-mail"
                error={errors.email?.message}
                {...register("email")}
            />
            <InputDemo
                label="Password"
                placeholder="Coloque sua senha"
                type="password"
                startIcon="/security.svg"
                endIcon="/eyes.svg"
                error={errors.password?.message}
                {...register("password")}
            />
            <CheckboxDemo label="Lembre-se por 30 dias" id="remember" />
            <Button loading={isLoading} type="submit" className="space-x-2">
                <span>Entrar    </span>
                <img src="/right-chevron.svg" alt="Chevron-right" />
            </Button>
        </form>
    );
}
