'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

const cardClasses = {
  container: 'flex flex-col bg-white rounded-default shadow-md hover:shadow-lg transition-shadow duration-300',
  image: 'w-full h-48 object-cover rounded-t-default',
  content: 'p-4',
  title: 'font-nunito text-xl font-bold mb-2',
  date: 'text-sm text-gray-600 mb-2',
  description: 'text-gray-700 mb-4',
  category: 'inline-block bg-primary-light text-white px-2 py-1 rounded-default text-sm mr-2 mb-2',
};

interface CardProps extends PropsWithChildren {
  title: string;
  date?: string;
  text?: string;
  image?: string;
  url?: string;
  category?: string[];
  edit?: boolean;
}

type CardWrapperProps = Omit<CardProps, 'url'>;

export const CardWrapper = ({ children, href, edit, className, onClick }: CardWrapperProps) => {
  if (edit) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <Link href={href || ''} className={className}>
      {children}
    </Link>
  );
};

const Card = ({ title, date, text, image, url, category, edit }: CardProps) => {
  const CardWrapper = edit ? 'div' : Link;

  return (
    <CardWrapper href={url || ''} className={cardClasses.container}>
      {image && (
        <div className="relative">
          <Image src={image} alt={title} width={300} height={200} className={cardClasses.image} priority />
        </div>
      )}
      <div className={cardClasses.content}>
        <h3 className={cardClasses.title}>{title}</h3>
        {date && <p className={cardClasses.date}>{date}</p>}
        {text && <p className={cardClasses.description}>{text}</p>}
        {category && (
          <div className="flex flex-wrap">
            {category.map((cat) => (
              <span key={cat} className={cardClasses.category}>
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default Card;
