import { Agentation } from "agentation";
import { useMemo } from "react";

const LOCAL_PREVIEW_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

function isPrivateLanHost(hostname) {
  return (
    /^10\./.test(hostname) ||
    /^192\.168\./.test(hostname) ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
  );
}

function resolveAgentationConfig() {
  const params = new URLSearchParams(window.location.search);
  const forceOn = params.get("agentation") === "on";
  const forceOff = params.get("agentation") === "off";
  const hostname = window.location.hostname;
  const isLocalHost = LOCAL_PREVIEW_HOSTS.has(hostname) || isPrivateLanHost(hostname);
  const enabled = !forceOff && (forceOn || isLocalHost);
  const endpoint =
    params.get("agentationEndpoint") ||
    process.env.REACT_APP_AGENTATION_ENDPOINT ||
    "http://localhost:4747";

  return { enabled, endpoint };
}

export default function AgentationToolbar() {
  const { enabled, endpoint } = useMemo(resolveAgentationConfig, []);

  if (!enabled) {
    return null;
  }

  return <Agentation endpoint={endpoint} />;
}
