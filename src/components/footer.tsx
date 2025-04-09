export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 justify-center items-center py-4 gap-1">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Smart Maintenance Scheduler.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">Created by Jake Pasternak.</p>
    </footer>
  );
}
