import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
	return (
		<section className="flex gap-3 flex-wrap">
			{"abcdefghi".split("").map((i) => (
				<SkeletonCard key={i} />
			))}
		</section>
	);
}
