import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home presents senior AI positioning and working actions", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "reliable AI systems",
  );
  await expect(page.getByText("100+", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /view selected work/i }),
  ).toHaveAttribute("href", "#work");
  await expect(
    page.getByRole("link", { name: /résumé/i }).first(),
  ).toHaveAttribute("href", "/resume/chase-naples-resume.pdf");
  await expect(page.locator("#work")).toBeVisible();
});

test("case studies and writing use addressable routes", async ({ page }) => {
  await page.goto("/work/cleanshare-pro");
  await expect(
    page.getByRole("heading", { level: 1, name: "CleanShare Pro" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /view repository/i }),
  ).toHaveAttribute("href", /CleanShare-Pro/);

  await page.goto("/writing/reliable-enterprise-ai-router");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Designing a Reliable Enterprise AI Router",
  );
  await expect(
    page.getByRole("heading", { level: 2, name: /execution modes/i }),
  ).toBeVisible();
});

test("primary pages have no automatically detectable accessibility violations", async ({
  page,
}, testInfo) => {
  const routes = ["/", "/work/enterprise-conversational-ai", "/writing"];
  for (const route of routes) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, `${route} on ${testInfo.project.name}`).toEqual(
      [],
    );
  }
});

test("all internal navigation targets resolve", async ({ page, request }) => {
  await page.goto("/");
  const hrefs = await page
    .locator('a[href^="/"]')
    .evaluateAll(
      (links) =>
        Array.from(
          new Set(
            links.map((link) => link.getAttribute("href")).filter(Boolean),
          ),
        ) as string[],
    );
  for (const href of hrefs) {
    const path = href.split("#")[0] || "/";
    const response = await request.get(path);
    expect(response.ok(), `${path} should resolve`).toBeTruthy();
  }
});
