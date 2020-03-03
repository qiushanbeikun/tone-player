import React from "react";

export function renderSheet({sheetJSON}) {

  return (
    <div>
      {sheetJSON["sheets"].map((eachSound, i) => (
        <div>

        </div>
      ))}
    </div>
  )
}
