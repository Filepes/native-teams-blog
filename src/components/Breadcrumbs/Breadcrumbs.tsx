'use client';

import {
  BreadcrumbsContainer,
  BreadcrumbsList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbText,
} from './Breadcrumbs.styled';

interface BreadcrumbProps {
  href?: string;
  label: string;
  isLast?: boolean;
}

interface BreadcrumbsProps {
  crumbs: BreadcrumbProps[];
}

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <BreadcrumbsContainer>
      <BreadcrumbsList>
        {crumbs.map((crumb, index) => (
          <BreadcrumbItem key={index}>
            {crumb.href && !crumb.isLast ? (
              <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
            ) : (
              <BreadcrumbText>{crumb.label}</BreadcrumbText>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbsList>
    </BreadcrumbsContainer>
  );
};
