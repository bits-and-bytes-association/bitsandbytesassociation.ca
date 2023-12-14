import Title from './Title';

export default function Page({ title, description, children }) {
  return (
    <>
      <Title title={title} />
      <div className="container mx-auto px-6 pt-8 pb-16">
        <h1 className="mb-6 cursor-default text-5xl font-black text-neutral-900">
          {title}
        </h1>
        <p className="mb-12 text-xl text-neutral-500">{description}</p>
        {children}
      </div>
    </>
  );
}
