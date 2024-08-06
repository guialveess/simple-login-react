import { Button } from "@/components/ui/button";

export default function HeaderButtons() {
    return (
        <div className="space-y-2">
            <Button variant={"outline"} className="gap-2 hover:bg-slate-200">
                <img src="/facebook.svg" alt="facebook" />
                <span className="font-semibold">Conectar com Facebook</span>
            </Button>
            <Button variant={"outline"} className="gap-2 hover:bg-slate-200">
                <img src="/twitter.svg" alt="facebook" />
                <span className="font-semibold">Conectar com Twitter</span>
            </Button>
        </div>
    )
}
