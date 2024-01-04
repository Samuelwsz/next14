import React from 'react';

export default function DashboardLayout({
  children,
  users,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
      </div>
    </div>
  );
}
