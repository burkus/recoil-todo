import { RecoilRoot } from "recoil"
import { ChakraProvider } from "@chakra-ui/react"
import Dashboard from "components/Dashboard"

export default function Home() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot >
    </ChakraProvider>
  )
}
