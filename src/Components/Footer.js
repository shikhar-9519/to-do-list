import React from 'react'

export default function footer() {
  return (
    <footer style={{ position: 'relative', bottom: 0, width: '100%', height: 60, backgroundColor: '#f5f5f5' }}>
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

