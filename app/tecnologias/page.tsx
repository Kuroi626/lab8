'use client';

import tecnologiasData from '@/app/data/tecnologias.json';
import TecnologiaCard from '@/components/tecnologiacard';

export default function TecnologiasPage() {
    const tecnologias = JSON.parse(JSON.stringify(tecnologiasData));

    return (
        <main className="p-8">
            <h2 className="text-2xl font-bold mb-6">Tecnologias Exploradas</h2>

            <div className="flex flex-wrap gap-4">
                {tecnologias.map((tech: any, index: number) => (
                    <TecnologiaCard
                        key={index}
                        title={tech.title}
                        image={tech.image}
                    />
                ))}
            </div>
        </main>
    );
}
