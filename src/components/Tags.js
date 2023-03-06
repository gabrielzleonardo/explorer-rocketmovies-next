export default function Tags({data}) {
  return (
    <>
      {data.tags.length > 0 && (
        <div className="flex gap-2">
          {data.tags.map((tag) => (
            <div
              className="font-slab text-xs text-[#E5E5E5] bg-[#312E38] rounded-lg px-4 py-1"
              key={tag.id}
            >
              {tag.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}