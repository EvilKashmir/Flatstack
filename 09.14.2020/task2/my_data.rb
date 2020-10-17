class MyData
  attr_accessor :columns_names, :lines

  def initialize(path)
    if File.exist?(path)
      file = File.open(path, "r:UTF-8")
      temp = file.readlines.map { |line| line.chomp }
      @columns_names = temp[0].split(", ")
      temp.delete_at(0)
      @lines = []
      temp.map { |line| @lines << line.split(", ") }
      file.close
    else
      raise "Not Found"
    end
  end

  def method_missing(method_name)
    column = 0
    method_name = method_name.to_s.gsub("sort_by_", "")
    while (@columns_names[column].to_s.gsub(/\s+/, "").downcase != method_name) && (column < @columns_names.length)
      column += 1
    end
    raise "Wrong input" if column >= @columns_names.length
    @lines.sort! { |x, y| x[column] <=> y[column] }
  end

  def write_file(path, sorted_lines)
    file = File.open(path, "w:UTF-8")
    file.write(@columns_names, "\n")
    sorted_lines.each do |line|
      line.each { |l| file.write("#{l}, ") }
      file.write("\n")
    end
  end
end
