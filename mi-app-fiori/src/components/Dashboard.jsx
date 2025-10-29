import React from 'react';
import { Card, CardHeader, CardContent } from 'fundamental-react';

function Dashboard() {
  return (
    <div className="fd-grid">
      <div className="fd-col fd-col-md--6 fd-col-lg--4">
        <Card>
          <CardHeader title="Ventas" />
          <CardContent>
            <p>Resumen de ventas del mes.</p>
          </CardContent>
        </Card>
      </div>

      <div className="fd-col fd-col-md--6 fd-col-lg--4">
        <Card>
          <CardHeader title="Inventario" />
          <CardContent>
            <p>Productos disponibles: 132</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
