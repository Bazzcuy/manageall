import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export const metadata: Metadata = {
  title: 'ManageAll - Ultimate Management System',
  description: 'A comprehensive web application for managing all aspects of your business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <Topbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
