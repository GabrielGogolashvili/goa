const packets = [120, 505, -45, 999, 14, 700, 33, 842]

const hasDangerousPacket = packets.some(packet => packet % 7 === 0 && packet > 500)

const result = hasDangerousPacket
    ? packets.filter(packet => packet > 0 && packet % 3 !== 0 && packet < 1000)
    : []

console.log(result)