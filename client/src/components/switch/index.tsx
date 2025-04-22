import { useState } from "react";
import { Switch } from "@headlessui/react";
import Sun from "../../assets/icons/sun";
import Moon from "../../assets/icons/moon";

import "./style.css";

export default function ModeSwitch() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="switch-container">
      <Sun fill={enabled ? "#3F4142":"#111216"} />
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`toggle ${enabled ? 'toggle-checked' : ''}`}
      >
        <span className={`toggle-thumb ${enabled ? 'thumb-checked' : ''}`} />
      </Switch>
      <Moon fill={enabled ? "#3F4142":"#111216"}  />
    </div>
  );
}
