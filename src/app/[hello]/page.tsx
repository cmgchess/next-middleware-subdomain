import { getTheme } from "@/theme/theme";
import { headers } from "next/headers";

export default function Page({ params }: { params: { hello: string } }) {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const theme = getTheme(subdomain);

  return (
    <div>
      <h1>
        Welcome to {subdomain} {params.hello} page
      </h1>
      <p>
        This page is served from a subdomain. The subdomain is used to determine
        the content of the page.
      </p>
    </div>
  );
}
