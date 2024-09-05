import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { User, Phone, Mail, ChevronDown, Star, Monitor, Clock, FileText } from 'lucide-react'; 
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select"; 
import { Checkbox } from "./ui/checkbox"; 
import { Label } from "./ui/label"; 

const Form = () => {
    const [selectedAge, setSelectedAge] = useState(""); 
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
        if (value.length > 2) {
            value = value.slice(0, 2) + '-' + value.slice(2);
        }
        setPhone(value);
    };

    return (
        <form className="space-y-4 pt-6 max-w-[800px] flex flex-col justify-center m-auto animate-fadeIn">
            <div className="flex space-x-4">
                <div className="relative w-1/2 animate-slideUp">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input placeholder="Nome" className="w-full pl-10 bg-gray-900 text-white placeholder-gray-500 border border-gray-700" />
                </div>
                <div className="relative w-1/2 animate-slideDown">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                        placeholder="Telefone"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="w-full pl-10 bg-gray-900 text-white placeholder-gray-500 border border-gray-700"
                    />
                </div>
            </div>
            <div className="flex space-x-4 animate-fadeIn">
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
            <div className="flex items-center space-x-2 py-2 animate-fadeIn">
                <Checkbox id="terms" className="w-4 h-4 border-gray-700" />
                <Label htmlFor="terms" className="text-gray-300">
                    Concordo com os Termos e Políticas de privacidade.
                </Label>
            </div>
            <Button 
                type="submit" 
                className="w-full h-[60px] bg-[#9a17ee] font-bold text-white rounded-lg hover:bg-[#b42bff] hover:brightness-105 transition-all duration-300 ease-in-out text-[19px] animate-slideUp"
            >
               Comece a estudar agora
            </Button>

            {/* Ícones e descrições abaixo do botão */}
            <div className="flex justify-around pt-4 text-white animate-fadeIn">
                <div className="flex flex-col items-center">
                    <Star className="h-8 w-8 text-[#9a17ee]" />
                    <span className="text-sm pt-2">Nota 4.9 de 5</span>
                </div>
                <div className="flex flex-col items-center">
                    <Monitor className="h-8 w-8 text-[#9a17ee]" />
                    <span className="text-sm  pt-2">+1.000 aulas</span>
                </div>
                <div className="flex flex-col items-center">
                    <Clock className="h-8 w-8 text-[#9a17ee]" />
                    <span className="text-sm  pt-2">+1.100h de conteúdo</span>
                </div>
                <div className="flex flex-col items-center">
                    <FileText className="h-8 w-8 text-[#9a17ee]" />
                    <span className="text-sm pt-2">+100 projetos práticos</span>
                </div>
            </div>
        </form>
    );
};

export default Form;
