import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CheckboxDemo, InputDemo } from "@/components";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
    email: z.string({
        required_error: "O e-mail é obrigatório",
        invalid_type_error: "Por favor inclua um '@' no endereço de e-mail"
    }).email({ message: "Endereço de email invalido" }),
    password: z.string({
        required_error: "Senha requerida",
    }).min(5, {
        message: "Deve ter pelo menos 5 caracteres"
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
