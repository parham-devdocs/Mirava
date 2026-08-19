import { load as parseYaml } from "js-yaml"
import type {  MirrorList } from "./types"

export const miravaMirrorsListQueryOptions = {
  queryKey: ["mirava", "mirrors-list"],
  staleTime: 60_000 *10 *60,
  queryFn: async () => {
    const response = await fetch("https://raw.githubusercontent.com/MiravaOrg/Mirava/refs/heads/main/mirrors_list.yaml")
    const data = await response.text()

    return parseYaml(data) as MirrorList
  }
}

