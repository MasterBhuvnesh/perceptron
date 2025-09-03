import { Loader } from "@/components";
import { useCustomFonts, useFrameworkReady } from "@/hooks";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  useFrameworkReady();

  const { loaded, error } = useCustomFonts();

  if (!loaded && !error) {
    return <Loader />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      ></Stack>
    </>
  );
}
