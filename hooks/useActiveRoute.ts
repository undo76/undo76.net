import { useRouter } from 'next/router';

export default function useActiveRoute(href: string, pathSegment: number) {
    const { route } = useRouter();
    return route.split('/')[pathSegment] == href.split('/')[pathSegment];
}
