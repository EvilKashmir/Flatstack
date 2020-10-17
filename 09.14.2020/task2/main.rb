require_relative "my_data"

class Main
  dir_path = File.dirname(__FILE__)
  db_path = dir_path + "/db/database.txt"
  data = MyData.new(db_path)
  puts("Please, type column name to sort by. Available columns:
        #{data.columns_names}")
  input_column_name = gets.chomp.gsub(/\s+/, "").downcase
  sorted_db_path = dir_path + "/sorted_db/db_sort_by_#{input_column_name}.txt"
  data.write_file(sorted_db_path, data.public_send("sort_by_#{input_column_name}"))
end
