import {
    CardDescription,
    CardHeader as Header,
    CardTitle
} from "@/components/ui/card"

export default function CardHeader() {
    return (
        <Header className="items-center gap-1">
            <img className="w-16 h-16" src="/BaseLogo.svg" alt="LOGO" />
            <CardTitle>Bem vindo de Volta</CardTitle>
            <CardDescription className="px-5 ">Faça login para acessar seu painel, configurações e projetos</CardDescription>
        </Header>
    )
}
