import { tv } from '@/lib/utils';
import { forwardRef } from 'react';

export const CardStyles = {
  Root: tv({
    base: [
      'rounded-lg border border-border bg-card text-card-foreground shadow-sm',
    ],
  }),
  Header: tv({
    base: ['flex flex-col space-y-1.5 p-6'],
  }),
  Title: tv({
    base: ['text-2xl font-semibold leading-none tracking-tight'],
  }),
  Description: tv({
    base: ['text-sm text-muted-foreground'],
  }),
  Content: tv({
    base: ['p-6 pt-0'],
  }),
  Footer: tv({
    base: ['flex items-center p-6 pt-0'],
  }),
};

export type CardProps = React.ComponentPropsWithoutRef<'div'>;
export const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={CardStyles.Root({ className })} {...props} />
  ),
);
CardRoot.displayName = 'Card';

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={CardStyles.Header({ className })} {...props} />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={CardStyles.Title({ className })} {...props}>
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={CardStyles.Description({ className })} {...props} />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={CardStyles.Content({ className })} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={CardStyles.Footer({ className })} {...props} />
));
CardFooter.displayName = 'CardFooter';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
