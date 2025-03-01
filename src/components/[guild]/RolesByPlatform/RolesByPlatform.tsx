import { Flex, useColorMode } from "@chakra-ui/react"
import Card from "components/common/Card"
import JoinButton from "components/[guild]/RolesByPlatform/components/JoinButton"
import { PropsWithChildren } from "react"
import { PlatformName } from "types"
import Platform from "./components/Platform"

type Props = {
  platformType: PlatformName
  platformName: string
  roleIds: Array<number>
}

const RolesByPlatform = ({
  platformType,
  platformName,
  roleIds,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <Card width="full">
      <Flex
        px={{ base: 4, sm: 6 }}
        py={{ base: 3, sm: 4 }}
        alignItems="center"
        justifyContent="space-between"
        bgColor={colorMode === "light" ? "white" : "blackAlpha.300"}
        borderBottomWidth={colorMode === "light" ? 1 : 0}
        borderBottomColor={colorMode === "light" ? "gray.200" : undefined}
      >
        <Flex maxW={{ base: "55%", sm: "none" }}>
          <Platform type={platformType} name={platformName} />
        </Flex>
        <JoinButton roleIds={roleIds} />
      </Flex>

      {children}
    </Card>
  )
}

export default RolesByPlatform
