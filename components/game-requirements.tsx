interface SystemRequirements {
  minimum: {
    os: string
    cpu: string
    ram: string
    gpu: string
    storage: string
  }
  recommended: {
    os: string
    cpu: string
    ram: string
    gpu: string
    storage: string
  }
}

interface GameRequirementsProps {
  requirements: SystemRequirements
}

export function GameRequirements({ requirements }: GameRequirementsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Minimum Requirements</h3>
        <ul className="space-y-2">
          <li className="flex">
            <span className="w-24 text-gray-400">OS:</span>
            <span className="text-white">{requirements.minimum.os}</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Processor:</span>
            <span className="text-white">{requirements.minimum.cpu}</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Memory:</span>
            <span className="text-white">{requirements.minimum.ram}</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Graphics:</span>
            <span className="text-white">{requirements.minimum.gpu}</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Storage:</span>
            <span className="text-white">{requirements.minimum.storage}</span>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Recommended Requirements</h3>
        <ul className="space-y-2">
          <li className="flex">
            <span className="w-24 text-gray-400">OS:</span>
            <span className="text-white">{requirements.recommended.os}</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Processor:</span>
            <span className="text-white">{requirements.recommended.cpu}</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Memory:</span>
            <span className="text-white">{requirements.recommended.ram}</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Graphics:</span>
            <span className="text-white">{requirements.recommended.gpu}</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Storage:</span>
            <span className="text-white">{requirements.recommended.storage}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
