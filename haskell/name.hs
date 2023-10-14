main :: IO()
main = do
  print("Nama kau siapa mas bro?")
  name <- getLine
  print("Ouh namamu " ++ name ++ " ya, gak kenal aku hahahah")