import Title from './Title';

export default function CenteredPage({ title, description, children }) {
  return (
    <>
      <Title title={title} />
      <div className="container mx-auto px-6 pt-8 pb-16">
        <div className="flex flex-col items-center justify-between">
          <h1 className="mb-6 cursor-default text-5xl font-black text-neutral-900">
            {title}
          </h1>
          <div className="mb-12 max-w-3xl text-center text-xl font-medium text-neutral-500">
            {description}
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
