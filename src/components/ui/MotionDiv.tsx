"use client";

import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

// Thin client wrapper around framer-motion's motion.div.
// Server components cannot import framer-motion directly (createMotionComponent
// may only run on the client), so pages that export metadata use this instead.
export default function MotionDiv({ children, ...props }: HTMLMotionProps<"div">) {
  return <motion.div {...props}>{children}</motion.div>;
}
