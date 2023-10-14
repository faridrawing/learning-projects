luasSegitiga :: Double -> Double -> Double
luasSegitiga a t1 = 0.5 * (a * t1)
volumePrismaSegitiga :: Double -> Double -> Double -> Double
volumePrismaSegitiga a t1 t2 = (luasSegitiga a t1) * t2

main :: IO ()
main = print(volumePrismaSegitiga 3 4 10)