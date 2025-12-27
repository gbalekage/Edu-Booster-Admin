"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Loader } from "lucide-react";
import { icons } from "@/constant";
import Image from "next/image";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-lg font-bold">
              Bienvenue sur EduBooster Admin.
            </h1>
            <FieldDescription>
              Vous n&apos;avez pas de compte ?{" "}
              <Link href="/auth/sign-up">Créer un compte</Link>
            </FieldDescription>
          </div>

          <Field>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="text-xs placeholder:text-xs"
              disabled={loading || googleLoading}
            />
          </Field>

          <Field className="-mt-3">
            <Input
              id="password"
              type="password"
              placeholder="**************"
              className="text-xs placeholder:text-xs"
              disabled={loading || googleLoading}
            />
          </Field>

          <Field>
            <Button disabled={loading || googleLoading} type="submit">
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin size-4" />
                  <p className="text-xs">Veuillez patienter...</p>
                </div>
              ) : (
                "Se connecter"
              )}
            </Button>
          </Field>

          <FieldSeparator>Ou</FieldSeparator>

          <Button
            variant="outline"
            type="button"
            disabled={loading || googleLoading}
          >
            {googleLoading ? (
              <div className="flex items-center gap-2">
                <Loader className="animate-spin size-4" />
                <p className="text-xs">Continuer avec Google</p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Image
                  src={icons.google}
                  alt="Icône Google"
                  className="size-4"
                />
                Continuer avec Google
              </div>
            )}
          </Button>
        </FieldGroup>
      </form>

      <FieldDescription className="px-6 text-xs text-center">
        En cliquant sur continuer, vous acceptez nos{" "}
        <a href="#">Conditions d&apos;utilisation</a> et notre{" "}
        <a href="#">Politique de confidentialité</a>.
      </FieldDescription>
    </div>
  );
}
