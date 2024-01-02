export default function PageContainer({ children }) {
  return (
    <div className="container mx-auto px-6 pt-4 pb-16 md:pt-16 md:pb-32">
      {children}
    </div>
  );
}
