type Solution struct{}

func (s *Solution) Encode(strs []string) string {
        var b strings.Builder

    for _, s := range strs {
        b.WriteString(strconv.Itoa(len(s)))
        b.WriteByte('#')
        b.WriteString(s)
    }

    return b.String()

}

func (s *Solution) Decode(encoded string) []string {
    res := []string{}
    i := 0

    for i < len(encoded) {
        // leer longitud
        j := i
        for encoded[j] != '#' {
            j++
        }

        length, _ := strconv.Atoi(encoded[i:j])
        j++ // saltar '#'

        // leer exactamente 'length' caracteres
        res = append(res, encoded[j:j+length])
        i = j + length
    }

    return res
}
