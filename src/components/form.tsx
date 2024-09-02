"use client"; // Indica que este componente é um Client Component

import React, { useState } from "react"; // Importe o React e useState corretamente
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { User, Phone, Mail, ChevronDown } from 'lucide-react'; // Incluindo o ícone ChevronDown
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select"; // Importe os componentes Select
import { Checkbox } from "./ui/checkbox"; // Importe o componente Checkbox
import { Label } from "./ui/label"; // Importe o componente Label

const Form = () => {
    const [selectedAge, setSelectedAge] = useState(""); // Agora useState funcionará corretamente

    return (
        <form className="space-y-4 pt-6 max-w-[900px] flex flex-col justify-center m-auto">
            <div className="flex space-x-4">
                <div className="relative w-1/2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input placeholder="Nome" className="w-full pl-10 bg-gray-900 text-white placeholder-gray-500 border border-gray-700" />
                </div>
                <div className="relative w-1/2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input placeholder="Telefone" className="w-full pl-10 bg-gray-900 text-white placeholder-gray-500 border border-gray-700" />
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="relative w-1/2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input type="email" placeholder="E-mail" className="w-full pl-10 bg-gray-900 text-white placeholder-gray-500 border border-gray-700" />
                </div>
                <div className="relative w-1/2">
                    <Select onValueChange={(value) => setSelectedAge(value)}>
                        <SelectTrigger className={`w-full bg-[#111827] border border-gray-700 ${selectedAge ? 'text-white' : 'text-gray-500'}`}>
                            <SelectValue placeholder="Selecione sua idade" />
                            <ChevronDown className="h-4 w-4 opacity-50 text-white" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10-18">Entre 10-18</SelectItem>
                            <SelectItem value="18-27">Entre 18-27</SelectItem>
                            <SelectItem value="27-40">Entre 27-40</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center space-x-2 py-2">
                <Checkbox id="terms" className="w-4 h-4 border-gray-700" />
                <Label htmlFor="terms" className="text-gray-300">
                    Concordo com os Termos e Políticas de privacidade.
                </Label>
            </div>
            <Button 
                type="submit" 
                className="w-full bg-[#9a17ee] font-bold text-white rounded-lg hover:bg-[#b42bff] hover:brightness-105 transition-all duration-300 ease-in-out"
            >
                Quero me inscrever agora
            </Button>
        </form>
    );
}

export default Form;
