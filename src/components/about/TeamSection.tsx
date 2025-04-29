'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { teamMembers } from '@/lib/data';
import { getTeamMemberImageUrl } from '@/lib/unsplash';

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Meet Our Team"
          subtitle="The talented bakers and designers behind our delicious creations"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-96 perspective-1000"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="absolute inset-0 rounded-lg overflow-hidden"
                animate={{
                  rotateY: hoveredId === member.id ? 180 : 0
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <Image
                  src={getTeamMemberImageUrl(parseInt(member.id) % 2 === 0 ? 'male' : 'female', parseInt(member.id))}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-pink-300">{member.role}</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-pink-600 text-white p-6 rounded-lg flex flex-col justify-center"
                animate={{
                  rotateY: hoveredId === member.id ? 0 : -180
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-pink-200 mb-4">{member.role}</p>
                <p className="text-white/90">{member.bio}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}