import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useVisitorCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["visitorCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getVisitorCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIncrementVisitorCount() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async () => {
      if (!actor) return;
      return actor.incrementVisitorCount();
    },
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("No actor available");
      return actor.submitContactForm(name, email, message);
    },
  });
}
