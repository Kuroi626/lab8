import Image from 'next/image';


interface TecnologiaCardProps {
title: string;
image: string;
}


export default function TecnologiaCard({ title, image }: TecnologiaCardProps) {
return (
<div className="w-48 h-48 bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center m-2">
<Image
src={`/tecnologias/${image}`}
alt={title}
width={60}
height={60}
/>
<h3 className="mt-4 font-semibold text-center">{title}</h3>
</div>
);
}