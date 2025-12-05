export default function Loading() {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center bg-background/80 ">
      <div className="flex flex-col items-center">
        {/* Simple spinner */}
        <div className="h-10 w-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />

        <p className="text-sm text-muted-foreground mt-4 tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}
