import { createFileRoute } from "@tanstack/react-router";
import {
  Ambulance,
  Baby,
  Brain,
  Check,
  Ear,
  Flask,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return null;
}
