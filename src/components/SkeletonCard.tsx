import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
	return (
		<Card className="w-[20rem] bg-slate-200 border border-slate-300 flex flex-col justify-between">
			<CardHeader className="flex gap-3">
				<Skeleton className="w-12 h-12 rounded-full" />
				<Skeleton className="h-6 flex-grow" />
			</CardHeader>
			<CardContent>
				<Skeleton className="h-4 flex-grow mt-4" />
				<Skeleton className="h-4 flex-grow mt-4" />
				<Skeleton className="h-4 w-1/2 mt-4" />
			</CardContent>
			<CardFooter className="flex justify-between">
				<Skeleton className="h-10 w-28" />
			</CardFooter>
		</Card>
	);
}
