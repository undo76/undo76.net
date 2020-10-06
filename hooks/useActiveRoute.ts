import { useRouter } from 'next/router';

export default function useActiveRoute(href: string) {
    const { route } = useRouter();
    return route === href;
}
