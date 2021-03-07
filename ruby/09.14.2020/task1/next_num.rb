class NextNum
  def self.next_num(str)
    i = 0
    res = ''
    while i < str.length
      count = 1
      while (i + 1 < str.length) && (str[i] == str[i+1])
        count += 1
        i += 1
      end
      res = res + "#{count}" + "#{str[i]}"
      i += 1
    end
    res
  end
end